import React from "react";

const Activity = ({ activityData }) => {
  return (
    <div className="w-full  lg:w-3/12 h-auto mt-10 lg:mt-0">
      <div className="rounded-lg p-3 md:p-5 shadow-sm border border-gray-400">
        <div className="text-xl font-bold flex justify-between items-center">
          Activity
          <div className="text-gray-600 text-xs font-normal">Last 50</div>
        </div>
        <div className="overflow-y-auto" style={{ height: "600px" }}>
          <div>
            {activityData.map((activity) => {
              return (
                <div
                  key={activity.id}
                  className="border-b border-gray-200 py-2 text-xs"
                >
                  {activity.type === "PullRequestEvent" &&
                    "Made a pull request to"}
                  {activity.type === "WatchEvent" && "Starred "}
                  {activity.type === "ForkEvent" && "Forked "}
                  {activity.type === "IssueCommentEvent" && "Commented on"}
                  {activity.type === "PushEvent" &&
                    "Pushed changes to repository"}
                  {activity.type === "DeleteEvent" && "Deleted"}
                  {activity.type === "ReleaseEvent" &&
                    "Published a release of "}
                  {activity.type === "CreateEvent" && "Created new repository"}
                  {activity.type === "CommitCommentEvent" &&
                    "Made a comment on"}
                  {activity.type === "PullRequestReviewCommentEvent" &&
                    "Reviewed PR comment on"}{" "}
                  <a
                    href={"https://github.com/" + activity.repo.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600"
                  >
                    {activity.repo.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer
        className="mt-5 text-center text-white p-5 rounded-lg"
        style={{ background: "#2C974B" }}
      >
        <a href="https://github.com/lamilekan263/chiji14assessment">
          Visit repo
        </a>
      </footer>
    </div>
  );
};

export default Activity;
