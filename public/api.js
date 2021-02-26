const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err);
    }
    console.log("post fetch");
    const json = await res.json();
    console.log(json, "Final result");
    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];
    console.log("Pre Fetch");
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(res, "post Fetch");
    const json = res.json();
    console.log(json, "Final resulty");
    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
