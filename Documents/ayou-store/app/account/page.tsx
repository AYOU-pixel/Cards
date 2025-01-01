import { Avatar, Button, TextField } from "@mui/material";

export default function Account() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gray-800 w-full py-4 text-center">
        <h1 className="text-2xl font-semibold">Your Account</h1>
      </div>

      {/* Account Section */}
      <div className="flex flex-col items-center mt-8 space-y-4">
        {/* Avatar */}
        <Avatar
          alt="John Doe's Avatar"
          src="/default-avatar.png"
          sx={{ width: 100, height: 100 }}
        />

        {/* Account Info */}
        <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-lg space-y-6">
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            InputLabelProps={{ style: { color: "#bbb" } }}
            InputProps={{
              style: { color: "#fff", backgroundColor: "#3b3b3b" },
            }}
            defaultValue="John Doe"
            className="mb-4" // Adds spacing between form fields
          />
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            InputLabelProps={{ style: { color: "#bbb" } }}
            InputProps={{
              style: { color: "#fff", backgroundColor: "#3b3b3b" },
            }}
            defaultValue="john.doe@example.com"
            className="mb-4" // Adds spacing between form fields
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            InputLabelProps={{ style: { color: "#bbb" } }}
            InputProps={{
              style: { color: "#fff", backgroundColor: "#3b3b3b" },
            }}
            defaultValue="+123 456 7890"
            className="mb-4" // Adds spacing between form fields
          />

          {/* Save Button */}
          <div className="flex justify-center mt-6">
            <Button
              variant="contained"
              color="primary"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition duration-200"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
