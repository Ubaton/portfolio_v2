export async function getProjectData(slug) {
  const vercelResponse = await fetch(`VERCEL_API_ENDPOINT/projects/${slug}`);
  const vercelData = await vercelResponse.json();

  const githubResponse = await fetch(`GITHUB_API_ENDPOINT/repos/${slug}`);
  const githubData = await githubResponse.json();

  return {
    vercelData,
    githubData,
  };
}
