import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://fluffy-space-tribble-9w76r5rpg7cw6g-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
        <h2 className="mb-0">Workouts</h2>
        <button className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#addWorkoutModal">Add Workout</button>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(workout => (
              <tr key={workout._id}>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding workout */}
      <div className="modal fade" id="addWorkoutModal" tabIndex="-1" aria-labelledby="addWorkoutModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addWorkoutModalLabel">Add Workout</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="workoutName" className="form-label">Workout Name</label>
                  <input type="text" className="form-control" id="workoutName" placeholder="Enter workout name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="workoutDescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="workoutDescription" placeholder="Enter description" />
                </div>
                <button type="submit" className="btn btn-secondary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
