import { test, describe, expect } from '@playwright/test'
// Full Stack open: Continuous integration (part 11)
// by The University of Helsinki
// url : https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-continuous-integration
// modified: Sept 24, 2026

// Change Logs :
// 1. Exercise 11.9: add simple end-to-end tests

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page
      .getByText('Pokémon and Pokémon character names are trademarks of Nintendo.'))
      .toBeVisible()
  })

  test('can navigate to Pokemon page', async ({ page }) => {

    const data = {
      name: 'raichu',
      speed: '110',
      special_defense: '80',
      special_attack:	'90',
      defense:	'55',
      attack:	'90',
      hp:	'60',
      hiddenAbility:['static','lightning rod'],
    }

    await page.goto('')
    await page.getByRole('link', { name: data.name }).click()

    await expect(page).toHaveURL(new RegExp(data.name))

    await expect(page
      .locator('//td[text()="speed"]/following-sibling::td'))
      .toHaveText(data.speed)
    await expect(page
      .locator('//td[text()="special defense"]/following-sibling::td'))
      .toHaveText(data.special_defense)
    await expect(page
      .locator('//td[text()="special attack"]/following-sibling::td'))
      .toHaveText(data.special_attack)
    await expect(page
      .locator('//td[text()="defense"]/following-sibling::td'))
      .toHaveText(data.defense)
    await expect(page
      .locator('//td[text()="attack"]/following-sibling::td'))
      .toHaveText(data.attack)
    await expect(page
      .locator('//td[text()="hp"]/following-sibling::td'))
      .toHaveText(data.hp)

    const hiddenAbility = page.locator('div.pokemon-ability-name')
    await expect(hiddenAbility.nth(0)).toHaveText(data.hiddenAbility[0])
    await expect(hiddenAbility.nth(1)).toHaveText(data.hiddenAbility[1])

  })

})