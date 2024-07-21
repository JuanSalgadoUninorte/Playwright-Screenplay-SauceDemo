import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Press } from "@testla/screenplay-playwright/web";

export class AddToCart extends Task {
    public async performAs(actor: Actor): Promise<void> {
        return actor.attemptsTo(
            Click.on('[data-test="add-to-cart"]'),
        );
    }
    public static add(): AddToCart {
        return new AddToCart();
    }
}