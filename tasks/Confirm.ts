import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Press } from "@testla/screenplay-playwright/web";

export class Confirm extends Task {
    public async performAs(actor: Actor): Promise<void> {
        return actor.attemptsTo(
            Click.on('[data-test="shopping-cart-link"]'),
            Click.on('[data-test="checkout"]')
        );
    }
    public static thePurchase(): Confirm {
        return new Confirm();
    }
}