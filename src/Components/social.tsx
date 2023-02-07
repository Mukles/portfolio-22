import { socalLinks } from "../data/social";

const Social = () => {
  return (
    <ul className="social">
<<<<<<< HEAD
      <li>
        <a href="/">Instagram</a>
      </li>
      <li>
        <a href="/">Linkdin</a>
      </li>
      <li>
        <a href="/">GitHub</a>
      </li>
      <li>
        <a href="/">Email</a>
      </li>
=======
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
>>>>>>> animation-2
    </ul>
  );
};

export default Social;
