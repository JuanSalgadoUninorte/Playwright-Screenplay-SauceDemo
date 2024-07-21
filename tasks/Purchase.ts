import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Press } from "@testla/screenplay-playwright/web";

export class Purchase extends Task {
    public async performAs(actor: Actor): Promise<void> {
        return actor.attemptsTo(
            Click.on('[data-test="item-4-title-link"]'),
        );
    }
    public static getNewElement(): Purchase {
        return new Purchase();
    }
}