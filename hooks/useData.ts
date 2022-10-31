import { useState } from 'react';
import data from '../data.json';

const useData = () => {
  const [about] = useState(data.about);
  const [profile] = useState(data.profile);
  const [career] = useState(data.career);
  const [education] = useState(data.education);
  const [skills] = useState(data.skills);

  return { about, profile, career, education, skills };
};

export default useData;
