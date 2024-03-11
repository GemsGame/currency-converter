import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PROVIDERS} from '../../libs/Providers';
import {ModelType, changeModel} from './settingsSlice';
import {voice} from '../../libs/VoiceStream';

export interface IState {
  history_id: number;
  history: any;
  request: string;
  loading: boolean;
  template: number | null;
}

const initialState: IState = {
  request: '', //messages
  history: [], // messages
  history_id: 0, //messages
  loading: false, //messages
  template: null, // messages
};

export const stopStream = createAsyncThunk(
  'messages/stopStream',
  async (model: string) => {
    try {
      await PROVIDERS[model as keyof typeof PROVIDERS].stop();
      await PROVIDERS.__savior_1.stop();
      await PROVIDERS.__savior_2.stop();
    } catch (error) {
      throw error;
    }
  },
);

interface IObject {
  model: {
    visible: ModelType;
    used: ModelType;
  };
  messages: Array<any>;
  account: string;
  callback: () => {}
}

export const voiceStart = createAsyncThunk('messages/voiceStart', async () => {
  try {
    await voice.stream.start();
  } catch (error) {
    throw error;
  }
});

export const voiceStop = createAsyncThunk('messages/voiceStop', async () => {
  try {
    await voice.stream.stop();
    await voice.convert();

    const open_ai_key = await PROVIDERS.ai0.__getRandomKey();
    const value = await voice.recognition(open_ai_key);

    if (value.text && typeof value.text === 'string') {
      return value.text;
    } else {
      throw new Error('not a string');
    }
  } catch (error: any) {
    throw new Error(error);
  }
});

export const sendMessage = createAsyncThunk(
  'messages/sendMessage',
  async (object: IObject, thunk) => {
    const {messages, model, account, callback} = object;
    try {
      thunk.dispatch(
        changeModel({visible: model.visible, used: model.visible}),
      );

      const stream = await PROVIDERS[
        model.visible as keyof typeof PROVIDERS
      ].sendRequest(messages, account);

      const message = await PROVIDERS[
        model.visible as keyof typeof PROVIDERS
      ].decode(stream, callback);

      return message;
    } catch (error) {
      //level 2 chat gpt 3.5 turbo
      thunk.dispatch(changeModel({visible: model.visible, used: '__savior_1'}));

      try {
        const stream = await PROVIDERS.__savior_1.sendRequest(messages);
        const message = await PROVIDERS.__savior_1.decode(stream, callback);

        return message;
      } catch (err: any) {
        // level 3 palm 2

        thunk.dispatch(
          changeModel({visible: model.visible, used: '__savior_2'}),
        );
        try {
          const stream = await PROVIDERS.__savior_2.sendRequest(messages);
          const message = await PROVIDERS.__savior_2.decode(stream, callback);

          return message;
        } catch (er: any) {
          throw new Error(er);
        }
      }
    }
  },
);

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    saveMessage(state, action) {
      if (!state.history[state.history_id]) {
        state.history[state.history_id] = {
          messages: [action.payload],
          metadata: {
            time: Date.now(),
            id: state.history_id,
            template: state.template,
          },
        };
      } else {
        state.history[state.history_id].messages.push(action.payload);
        state.history[state.history_id].metadata.time = Date.now();
      }
    },

    createANewSession(state) {
      const index = state.history?.length;
      state.history_id = index;
      state.template = null;
    },

    restoreHistory(state, action) {
      state.history_id = action.payload;
      state.template = state.history[state.history_id].metadata.template;
    },

    changeRequest(state, action) {
      state.request = action.payload;
    },
    changeTemplate(state, action) {
      state.template = action.payload;
    },

  },
  extraReducers: builder => {
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      if (!state.history[state.history_id]) {
        state.history[state.history_id] = {
          messages: [action.payload],
          metadata: {
            time: Date.now(),
            id: state.history_id,
            template: state.template,
          },
        };
      } else {
        state.history[state.history_id].messages.push(action.payload);
        state.history[state.history_id].metadata.time = Date.now();
      }

      state.loading = false;
    });

    builder.addCase(sendMessage.pending, state => {

      state.request = '';
      state.loading = true;
    });

    builder.addCase(sendMessage.rejected, state => {
      state.loading = false;
    });

    builder.addCase(stopStream.fulfilled, state => {
      state.loading = false;
    });

    builder.addCase(voiceStop.fulfilled, (state, action) => {
      state.request = action.payload;
    });
  },
});

export const {
  saveMessage,
  changeRequest,
  createANewSession,
  restoreHistory,
  changeTemplate,
} = messagesSlice.actions;
export default messagesSlice.reducer;
