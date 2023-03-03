import React, { useState } from "react";
import { Container, Header, Card, Icon, CardContent } from "semantic-ui-react";
import { useMutation } from "@apollo/client";

import { QUERY_GITHUB_REPO } from "../../utils/mutations";

import Auth from "../../utils/auth";

const data = [
  {
    repositoryName: "xenia",
    gitHubID: "7550637",
    description: "Xbox 360 Emulator Research Project ",
    language: "C",
    url: "https://github.com/xenia-project/xenia",
    issues: [
      {
        title: "Things that should be logged",
        url: "https://github.com/xenia-project/xenia/issues/1572",
      },
      {
        title: "Custom Controls Support",
        url: "https://github.com/xenia-project/xenia/issues/1333",
      },
    ],
    userComment: [
      {
        commentText: "How can I contribute to this project?",
        commentAuthor: "Max Kanat-Alexander",
      },
    ],
  },
];


export default function Home() {
  const isLoggedin = false;
  const [favourites, setFavourites] = useState([]);
  return (
    <>
      {isLoggedin && (
        <Container text style={{ marginTop: "7em" }}>
          favourites
          {data.map((data, index) => {
            if (
              favourites.find((f) => {
                //
                if (f === data.gitHubID) console.log("found " + data.gitHubID);
                return f === data.gitHubID;
              })
            )
              return (
                <ProjectCard
                  isLoggedin={isLoggedin}
                  data={data}
                  isFavourite={true}
                  setFavourites={setFavourites}
                  key={`favourites-${data.gitHubID}`}
                />
              );
          })}
        </Container>
      )}
      <Container text style={{ marginTop: "7em" }}>
        projects
        {data.map((d, i) => {
          return (
            <ProjectCard
              isLoggedin={isLoggedin}
              isFavourite={!!favourites.find((f) => f === d.gitHubID)}
              setFavourites={setFavourites}
              data={d}
              key={`projects-${d.gitHubID}`}
            />
          );
        })}
      </Container>{" "}
    </>
  );
}

const ProjectCard = (props) => {
  const {
    owner,
    description,
    gitHubID,
    repositoryName,
    url,
    language,
    userEmail,
    userComment,
  } = props.data;
  const { isFavourite, setFavourites, isLoggedin } = props;
  return (
    <Card>
      <Card.Content>
        <h1>{repositoryName}</h1>
        {isLoggedin && (
          <Icon
            style={{ display: "flex", float: "right" }}
            size="micro"
            name={isFavourite ? "star" : "star outline"}
            onClick={() => {
              setFavourites((prev) => {
                if (isFavourite) {
                  // If the project is already a favourite, remove it from the favourites list
                  return prev.filter((favourite) => favourite !== gitHubID);
                } else {
                  // If the project is not a favourite, add it to the favourites list
                  return [...prev, gitHubID];
                }
              });
            }}
          />
        )}
      </Card.Content>

      <Card.Content description={description} />
      <Card.Content description={language} />
    </Card>
  );
};

// import React from 'react'
// import { Card } from 'semantic-ui-react'

// const items = [
//   {
//     header: 'Project Report - April',
//     description:
//       'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//     meta: 'ROI: 30%',
//   },
//   {
//     header: 'Project Report - May',
//     description:
//       'Bring to the table win-win survival strategies to ensure proactive domination.',
//     meta: 'ROI: 34%',
//   },
//   {
//     header: 'Project Report - June',
//     description:
//       'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
//     meta: 'ROI: 27%',
//   },
// ]

// const CardExampleGroupProps = () => <Card.Group items={items} />

// export default CardExampleGroupProps
///https//react.semantic-ui.com/views/card/#content-extra-content/
// repositoryName: "xenia",
//     gitHubID: "7550637",
//     description: "Xbox 360 Emulator Research Project ",
//     language: "C",
//     url: "https://github.com/xenia-project/xenia",
//     issues: [
//       {
//         title: "Things that should be logged",
//         url: "https://github.com/xenia-project/xenia/issues/1572",
//       },
//       {
//         title: "Custom Controls Support",
//         url: "https://github.com/xenia-project/xenia/issues/1333",
//       },
//     ],
//     userComment: [
//       {
//         commentText: "How can I contribute to this project?",
//         commentAuthor: "Max Kanat-Alexander",
//       },
//     ],
