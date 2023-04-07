function conflictError(message) {
    return {
        name: "ConflictError",
        message,
    };
}

function notFoundError() {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }

export default {
    conflictError,
    notFoundError,
}