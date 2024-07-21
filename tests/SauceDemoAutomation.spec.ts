import { test } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb, Element } from '@testla/screenplay-playwright/web';
import { Dashboard } from '../tasks/Dashboard';
import { Purchase } from '../tasks/Purchase';
import { Finish } from '../tasks/Finish';
import { AddToCart } from '../tasks/AddToCart';
import { FillOut } from '../tasks/FillOut';
import { Confirm } from '../tasks/Confirm';

test('Purchase in SauceDemo', async ({ page }) => {
    const actor = Actor.named('Hera Syndulla')
        .with('user', 'standard_user')
        .with('password', 'secret_sauce')
        .with('name', 'Jabba')
        .with('last_name', 'The Hut')
        .with('zip_code', '265823')
        .can(BrowseTheWeb.using(page));
    await actor.attemptsTo(Dashboard.logIn());
    await actor.attemptsTo(Purchase.getNewElement());
    await actor.asks(Element.toBe.visible('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size', {
        hasText: 'Sauce Labs Backpack'
    }));
    await actor.attemptsTo(
        AddToCart.add(),
        Confirm.thePurchase(),
        FillOut.theForm(),
        Finish.thePurchase());
    await actor.asks(Element.toBe.visible('[data-test="complete-header"]', {
        hasText: 'Thank you for your order!'
    }));
});