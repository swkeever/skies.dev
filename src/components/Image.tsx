import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
type ImageProps = {
  svgContent?: string
  fluid?: FluidObject
  file: object
  alt: string
}

const Image = ({ svg, fluid, file, alt }: ImageProps) => {
  if (file.contentType === "image/svg+xml") {
    if (svg && svg.content) {
      // Inlined SVGs
      return <div dangerouslySetInnerHTML={{ __html: svg.content }} />
    }

    // SVGs that can/should not be inlined
    return <img src={file.url} alt={alt} />
  }

  // Non SVG images
  return <Img fluid={fluid} alt={alt} />
}

export default Image
