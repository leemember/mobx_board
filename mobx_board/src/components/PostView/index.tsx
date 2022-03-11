interface IProps {
  post: {
    id: string;
    title: string;
    recommendaMenu: string;
    price: number;
  }
}

const PostView = (props: IProps) => {
  const {title, recommendaMenu, price} = props.post;

  return (
    <section className="postView">
    <div>
      <h3>🏘 식당명</h3>
      <p>{title}</p>
    </div>

    <div>
      <h3>🍽 추천메뉴</h3>
      <p>{recommendaMenu}</p>
    </div>

    <div>
      <h3>💳 가격</h3>
      <p>{price}</p>
    </div>
  </section>
  );
};

export default PostView;
