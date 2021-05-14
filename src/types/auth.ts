export interface UserInt {}

export interface AuthInt {
  isLoading: boolean;
  error: string;
  onLogin(email: string, password: string): void;
  onRegister(email: string, password: string, repeatPassword: string): void;
  user: UserInt | null;
  isAuthenticated: boolean;
}

export interface NavigationProps {
  navigation: {
    goBack(): void;
    navigate(location: string): void;
  };
}
