const fakeUser = {
  id: 1,
  name: "Lokendra Naht",
  email: "lokendra@x.com",
};

// Fake Api Call Login
export const fakeLogin = async (
  email: string,
  password: string
): Promise<{ success: boolean; user?: any; error?: string }> => {
  return new Promise((res) => {
    setTimeout(() => {
      if (email === "lokendra@x.com" && password === "lokendra") {
        localStorage.setItem("isAuthenticated", "true");
        res({ success: true, user: fakeUser });
      } else {
        res({ success: false, error: "invalid credentials" });
      }
    }, 1000);
  });
};

export const fakeLogout = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("isAuthenticated");
      resolve();
    }, 400);
  });
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("isAuthenticated") === "true";
};
