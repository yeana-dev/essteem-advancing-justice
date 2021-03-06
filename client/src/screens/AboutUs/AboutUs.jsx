import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import "./AboutUs.css";

export default function AboutUs(props) {
  const [affiliates, setAffiliates] = useState(null);
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "affiliate"]{
      name,
      slug,
      link,
      publishedAt,
      bio,
      image{
        asset->{
          _id,
          url
        },
      },
    }`
      )
      .then((data) => setAffiliates(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        <header className="flex flex-col gap-7 text-center">
          <h2 className="text-aajc-orange font-bold text-3xl ">
            Together, we fight anti-Asian hate and discrimination.
          </h2>
          <p>
            Asian Americans Advancing Justice (Advancing Justice) is a national
            affiliation of five civil rights nonprofit organizations.
          </p>
          <p>We are independently led, operated and funded.</p>
          <p>
            We share a common mission to promote a fair and equitable society
            for all by working for civil and human rights that empower Asian
            Americans and Pacific Islanders and other underserved communities.
          </p>
        </header>
        <div className="flex py-10 flex-wrap">
          {affiliates &&
            affiliates.map((affiliate, key) => (
              <div
                key={key}
                className="flex flex-col gap-2 items-center px-3 w-52 my-2 justify-start mx-auto"
              >
                <img
                  src={urlFor(affiliate.image.asset.url).width(300).url()}
                  alt=""
                  className="object-cover"
                />
                <p className="text-sm font-semibold text-center">
                  {affiliate.name}
                </p>
                <Link
                  to={`/about-us/${affiliate.slug.current}`}
                  className="text-xs underline uppercase"
                >
                  Learn More
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
