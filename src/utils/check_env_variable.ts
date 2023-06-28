// this function will check if the env variable is defined and has value.
// if variable not defined or does not have value; will throw error and breake runtime

export const checkEnvVariable = (name: string): void => {
  if (!process.env[name] || process.env[name]?.length === 0)
    throw new Error(`You have to set value of ${name} for the environment!`);
};
