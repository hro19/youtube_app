import UsernameFunc from './usernameFunc';
import { expect, it, describe, beforeEach } from "vitest";

describe('UsernameFuncのテスト', () => {
    let usernameFunc: UsernameFunc;

    beforeEach(() => {
        usernameFunc = new UsernameFunc();
    });

    describe('usernameOrAnonimace', () => {
        it('should return the value if it is not null or empty', () => {
            const value = 'John Doe';
            const result = usernameFunc.usernameOrAnonimace(value);
            expect(result).toBe(value);
        });

        it('should return "ログインしてください" if the value is null or empty', () => {
            const value = '';
            const result = usernameFunc.usernameOrAnonimace(value);
            expect(result).toBe('ログインしてください');
        });
    });

    describe('isNotNullEmpty', () => {
        it('should return true if the value is not null or empty', () => {
            const value = 'Michale';
            const result = usernameFunc.isNotNullEmpty(value);
            expect(result).toBe(true);
        });

        it('should return false if the value is null or empty', () => {
            const value = '';
            const result = usernameFunc.isNotNullEmpty(value);
            expect(result).toBe(false);
        });

        it('should return false if the valueはnullのとき', () => {
            const value: any = null;
            const result = usernameFunc.isNotNullEmpty(value);
            expect(result).toBe(false);
        });

        it('should return false if the value is undefined', () => {
            const value: any = undefined;
            const result = usernameFunc.isNotNullEmpty(value);
            expect(result).toBe(false);
        });
    });
});
