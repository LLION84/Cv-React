import React, { useEffect, useState } from "react";

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération du profil");
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="text-center">
      <h2>{profile.name || profile.login}</h2>
      <img
        src={profile.avatar_url}
        alt={`${profile.login} avatar`}
        style={{ width: "150px", borderRadius: "75px" }}
      />
      <p>{profile.bio || "Pas de bio disponible"}</p>
      <p>Repos publics : {profile.public_repos}</p>
      <p>Abonnés : {profile.followers}</p>
      <p>Abonnements : {profile.following}</p>
      <p>
        Date de création : {new Date(profile.created_at).toLocaleDateString()}
      </p>{" "}
      <p>
        Dernière mise à jour :{" "}
        {new Date(profile.updated_at).toLocaleDateString()}
      </p>{" "}
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        Voir le profil GitHub
      </a>
    </div>
  );
};

export default GitHubProfile;
