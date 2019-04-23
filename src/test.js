function CatProfile(props) {
  return (
    <div className="profile-container">
      <h1>{props.name}</h1>
      {console.log(props.delay)}
      <ImageGallery imageList={props.imageList} delay={props.delay} age="props.age" />
      <ul>
        <li>{props.age}</li>
        <li>{props.bio}</li>
      </ul>
    </div>
  );
}

// Rendered as follows:
const images = [
  "https://scontent-lga3-1.cdninstagram.com/vp/6efe4083d34af17429cfcc2d61950078/5D1E0662/t51.2885-15/e35/41947231_545641922564242_2180331158023048093_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com",
  "https://scontent-lga3-1.cdninstagram.com/vp/919eaaf80d318238cb6371b82d6b7ad8/5D0240A5/t51.2885-15/e35/41754834_1107276449441515_7794569800674983889_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com",
  "https://scontent-lga3-1.cdninstagram.com/vp/b5b6afc317162ac26d0c038b8a30c63e/5D22952C/t51.2885-15/e35/41282265_718208611905210_2088447488365513085_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com"
];

<CatProfile
  name="Sugar & Cinnamon"
  age={1.25 * 2}
  imageList={images}
  bio="Two friendly cats who love and hate each other."
/>
