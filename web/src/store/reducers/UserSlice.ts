import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../common/types/User";
import {DEFAULT_USER} from "../../common/constants/DefaultUser";

interface UserState {
  user: User;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: DEFAULT_USER,
  isLoading: false,
  error: ''
}

export const userSlice = createSlice({
  name: 'slice',
  initialState,
  reducers:{
    setUser(state, action: PayloadAction<User>){
      state.user = action.payload
    }
  }
})

export default userSlice.reducer;