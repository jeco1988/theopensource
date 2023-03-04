import React, { useState, useEffect } from "react";
import { Container, Card, Message } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { QUERY_GITHUB_REPO } from "../../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_GITHUB_REPO);
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Projects</h2>
      <Message>
        <p>
          Browse through the list of <i>Good First Issues</i>. You will need to
          be logged in to access the GitHub Link. Don't have an account, the{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </Message>

      <Container text style={{ marginTop: "50px" }}>
        {data.getAllGitHubRepo.map((d) => (
          <Card fluid color="red">
            <Card.Content key={d._id}>
              <h3>{d.repositoryName}</h3>
            </Card.Content>
            <Card.Content meta={d.language} />
            <Card.Content description={d.description} />
            <Card.Content>
              {isLoggedIn ? (
                <p>
                  <a href={d.url} target="_blank" rel="noreferrer">
                    Github Link
                  </a>
                </p>
              ) : (
                <p>Github Link</p>
              )}
            </Card.Content>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Home;
