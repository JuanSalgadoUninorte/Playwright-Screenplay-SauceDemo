import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Press } from "@testla/screenplay-playwright/web";

export class Dashboard extends Task {
    public async performAs(actor: Actor): Promise<void> {
        return actor.attemptsTo(
            Navigate.to('https://www.saucedemo.com/'),

            Fill.in('[data-test="username"]',
                actor.states('user') || ''),
            Fill.in('[data-test="password"]',
                actor.states('password') || ''),
            Press.key('Enter')
        );
    }
    public static logIn(): Dashboard {
        return new Dashboard();
    }
}