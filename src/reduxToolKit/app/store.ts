import { configureStore } from '@reduxjs/toolkit';
import sneakerReducer from '../features/sneaker/sneakerSlice'

export const store = configureStore({
    reducer: { 
        sneakers: sneakerReducer 
    }
})

// RootState type
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch