import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Press } from "@testla/screenplay-playwright/web";

export class Finish extends Task {
    public async performAs(actor: Actor): Promise<void> {
        return actor.attemptsTo(
            Click.on('[data-test="finish"]')
        );
    }
    public static thePurchase(): Finish {
        return new Finish();
    }
}