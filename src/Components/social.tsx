import { socalLinks } from "../data/social";

const Social = () => {
  return (
    <ul className="social">
      {socalLinks.reverse().map(({ link, media }) => {
        return (
          <li key={media}>
            {media === "Email" ? (
              <a href={`mailto:${link}`} className="hover">
                {media}
              </a>
            ) : (
              <a href={link} target="_blank" className="hover" rel="noreferrer">
                {media}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
