import { RestaurantInt } from "./restaurant";
export interface UserInt {
  uid: string;
  email: string;
}

export interface AuthInt {
  isLoading: boolean;
  error: string;
  onLogin(email: string, password: string): void;
  onRegister(email: string, password: string, repeatPassword: string): void;
  onLogout(): void;
  user: UserInt | null;
  isAuthenticated: boolean;
}

interface OptionsInt {
  restaurant: RestaurantInt;
}
export interface NavigationProps {
  navigation: {
    goBack(): void;
    navigate(location: string, options?: OptionsInt): void;
  };
}
