import { track } from '@middleware.io/nextjs-vercel';

export function register() {
    console.log("register ts")
    track({
        projectName: "keval-project",
        serviceName: "keval-service",
        target: "https://rp7tv69.middleware.io:443",
        accountKey: "fktzpvgssq4p2rkk3fdbh8vkxihye64b5qk4"
    });
}
