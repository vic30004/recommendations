import Cards from "../Cards";

export const generateCard = (user, item, args) => {
  const { deleteItem, editItem, editLoading, follow, cover } = args;
  console.log(cover);
  return (
    <Cards
      key={item.title}
      id={item.id}
      title={item.title}
      picture={cover ? item.cover_picture : item.main_picture}
      description={item.description}
      userId={item.user_id}
      recommendation_id={item.recommendation_id || item.id}
      user={user ? user : null}
      deleteItem={deleteItem}
      editItem={editItem}
      editLoading={editLoading}
      profileCard={true}
      follow={follow}
    />
  );
};
