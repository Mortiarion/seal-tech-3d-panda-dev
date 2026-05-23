export const Route = {
    root: '/',

    auth: {
        login: '/auth',
        // login: '/auth/login',
        // register: '/auth/register',
        forgotPassword: '/auth/forgot_password',
    },

    merchandise: '/merchandise',
    aiGeneration: '/ai-generation',
} as const;

export type RoutePath = (typeof Route)[keyof typeof Route];
export type RouteKey = keyof typeof Route;
