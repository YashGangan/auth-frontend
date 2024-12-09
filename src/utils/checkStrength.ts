export interface PasswordCheck {
    hasMinLength: boolean;
    hasNumber: boolean;
    hasLowercase: boolean;
    hasUppercase: boolean;
    hasSpecialChar: boolean;
  }
  
  // Function to check password criteria
  export const checkPasswordStrength = (password: string): PasswordCheck => {
    return {
      hasMinLength: password.length >= 8,
      hasNumber: /[0-9]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasSpecialChar: /[@$!%*?&]/.test(password),
    };
  };
  