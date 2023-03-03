import React, { useState, useEffect } from "react";
import { Container, Card, Icon, Grid } from "semantic-ui-react";
import Auth from '../../utils/auth'

const data = [
  {
    owner: "wp-graphql",
    language: "PHP",
    stars: "2925",
    stars_display: "2.92K",
    id: "72453516",
  },
  {
    owner: "zulip",
    repositoryName: "zulip",
    gitHubID: "43160685",
    userEmail: "mkanatalexander@techfriends.dev",
  },
  {
    owner: "whitesmith",
    repositoryName: "rubycritic",
    gitHubID: "13445293",
    userEmail: "wtls@techfriends.dev",
    userComment: [
      {
        commentText: "I am happy that I am contributing for the project",
        commentAuthor: "Why The Lucky Stiff",
      },
    ],
  },
  {
    owner: "xenia-project",
    repositoryName: "xenia",
    gitHubID: "7550637",
    userComment: [
      {
        commentText: "How can I contribute to this project?",
        commentAuthor: "Max Kanat-Alexander",
      },
    ],
  },
];


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
    }
  }, [isLoggedIn]);

  const handleToggleFavorite = (gitHubID) => {
    if (!isLoggedIn) {
      // TODO: show a message or redirect to the login page
      return;
    }

    const isFavorite = favorites.includes(gitHubID);
    const updatedFavorites = isFavorite
      ? favorites.filter((favorite) => favorite !== gitHubID)
      : [...favorites, gitHubID];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      {isLoggedIn && (
   <Grid columns={favorites.length} style={{ marginTop: "7em" }} stackable>
   <Grid.Row>
     <Grid.Column>
       <h2>Favorites</h2>
     </Grid.Column>
   </Grid.Row>
   <Grid.Row>
     {data.map((d) => {
       if (favorites.includes(d.gitHubID)) {
         return (
           <Grid.Column key={d.gitHubID}>
             <ProjectCard
               data={d}
               isFavorite={true}
               onToggleFavorite={handleToggleFavorite}
             />
           </Grid.Column>
         );
       }
     })}
   </Grid.Row>
 </Grid>
)}

      <Container text style={{ marginTop: "7em" }}>
        <h2>Projects</h2>
        {data.map((d) => (
          <ProjectCard
            key={d.gitHubID}
            data={d}
            isFavorite={favorites.includes(d.gitHubID)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </Container>
    </>
  );
}

const ProjectCard = ({ data, isFavorite, onToggleFavorite }) => {
  const { owner, gitHubID, repositoryName } = data;

  return (
    <Card>
      <Card.Content>
        <h1>{repositoryName}</h1>
        {Auth.loggedIn() && (
          <Icon
            style={{ display: "flex", float: "right" }}
            size="micro"
            name={isFavorite ? "star" : "star outline"}
            onClick={() => onToggleFavorite(gitHubID)}
          />
        )}
      </Card.Content>

      <Card.Content description={gitHubID} />
      <Card.Content description={owner} />
    </Card>
  );
};