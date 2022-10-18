import type { SessionSchema, UserSchema } from "lucia-sveltekit/adapter";

export const convertUserDoc = (row: UserDoc): UserSchema => {
    const {
        _id: id,
        __v: _,
        hashed_password,
        provider_id,
        ...userData
    } = row;
    return {
        id,
        hashed_password,
        provider_id,
        ...userData,
    };
};

export const convertSessionDoc = (row: SessionDoc): SessionSchema => {
    const {
        _id: id,
        __v: _,
        user_id: userId,
        expires,
        idle_expires: idleExpires
    } = row;
    return {
        id,
        user_id: userId,
        expires,
        idle_expires: idleExpires
    };
};