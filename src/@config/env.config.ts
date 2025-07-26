interface IENV {
  BaseUrl: string | null;
}

export const ENV: IENV = {
  BaseUrl: process.env.NEXT_PUBLIC_BASE_URL || null,
};
