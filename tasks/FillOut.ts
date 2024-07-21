import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Press } from "@testla/screenplay-playwright/web";

export class FillOut extends Task {
    public async performAs(actor: Actor): Promise<void> {
        return actor.attemptsTo(
            Fill.in('[data-test="firstName"]',
                actor.states('name') || ''),
            Fill.in('[data-test="lastName"]',
                actor.states('last_name') || ''),
            Fill.in('[data-test="postalCode"]',
                actor.states('zip_code') || ''),
            Click.on('[data-test="continue"]')
        );
    }
    public static theForm(): FillOut {
        return new FillOut();
    }
}