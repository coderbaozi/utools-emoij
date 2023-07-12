import { describe, expect, it } from 'vitest'
import { dealCodePoint, dealSentence, loadResource, preDeal } from '~/preset/preDeal'

describe('RE', () => {
  const resource = loadResource()
  it('should be matched codePoint', () => {
    const matchs = dealCodePoint(resource)
    expect(matchs).toMatchInlineSnapshot(`
      [
        [
          "1F54A",
          "FE0F",
        ],
        [
          "1F54A",
          "FE0F",
        ],
        [
          "1F985",
        ],
        [
          "1F469",
          "1F3FC",
          "200D",
          "2764",
          "200D",
          "1F469",
          "1F3FE",
        ],
      ]
    `)
  })
  it('should be matched Sentence', () => {
    const matchs = dealSentence(resource)
    expect(matchs).toMatchInlineSnapshot(`
      [
        "dove",
        "dove",
        "eagle",
        "couple with heart",
      ]
    `)
  })
  it('should be matched res', () => {
    const emoijs = preDeal()
    expect(emoijs).toMatchInlineSnapshot(`
      Map {
        "dove" => [
          [
            "1F54A",
            "FE0F",
          ],
          [
            "1F54A",
            "FE0F",
          ],
        ],
        "eagle" => [
          [
            "1F985",
          ],
        ],
        "couple with heart" => [
          [
            "1F469",
            "1F3FC",
            "200D",
            "2764",
            "200D",
            "1F469",
            "1F3FE",
          ],
        ],
      }
    `)
  })
})
