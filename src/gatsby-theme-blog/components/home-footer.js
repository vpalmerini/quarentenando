import React, { Fragment } from "react";
import { Styled, css } from "theme-ui";

const Footer = () => {
  const socialLinks = [
    { name: "github", url: "https://github.com/vpalmerini" },
    { name: "linkedin", url: "https://www.linkedin.com/in/victorpalmerini/" },
  ];

  return (
    <footer
      css={css({
        mt: 4,
        pt: 3,
      })}
    >
      {socialLinks
        ? socialLinks.map((platform, i, arr) => (
            <Fragment key={platform.url}>
              <Styled.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.name}
              </Styled.a>
              {arr.length - 1 !== i && (
                <Fragment>
                  {` `}&bull;{` `}
                </Fragment>
              )}
            </Fragment>
          ))
        : null}
    </footer>
  );
};
export default Footer;
