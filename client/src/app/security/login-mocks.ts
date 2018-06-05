import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: "TestUser1",
    bearerToken: "abcd1234",
    isAuthenticated: true,
    canAccessProduct: true,
    canAddProduct: true,
    canSaveProduct: true,
    canAccessCategories: true,
    canAddCategory: false
  },
  {
    userName: "TestUser2",
    bearerToken: "1234abcd",
    isAuthenticated: true,
    canAccessProduct: false,
    canAddProduct: false,
    canSaveProduct: false,
    canAccessCategories: true,
    canAddCategory: true
  }
];
