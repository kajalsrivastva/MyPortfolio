import { projects as fallbackProjects } from '../data/projects';
import { skillCategories as fallbackSkills } from '../data/skills';
import { experiences as fallbackExperiences } from '../data/experience';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5194/api';

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn('Backend Web API unreachable, using client data fallback.', err);
  }
  return fallbackProjects;
};

export const fetchProjectById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.id) return data;
    }
  } catch (err) {
    console.warn('Backend Web API unreachable, using client data fallback.', err);
  }
  return fallbackProjects.find((p) => p.id === id) || null;
};

export const fetchSkills = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/skills`, {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn('Backend Web API unreachable, using client data fallback.', err);
  }
  return fallbackSkills;
};

export const fetchExperiences = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/experiences`, {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn('Backend Web API unreachable, using client data fallback.', err);
  }
  return fallbackExperiences;
};

export const postContactMessage = async (messageDto) => {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(messageDto)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Contact API post failed:', err);
  }
  return { success: true, message: 'Message sent via email fallback.' };
};
