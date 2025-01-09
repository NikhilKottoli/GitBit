import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-4">
        {/* Button to open the dialog */}
        <Button
          variant="primary"
          onClick={() => setDialogOpen(true)}
          className="w-full max-w-xs mx-auto"
        >
          Open Dialog
        </Button>

        {/* Dialog component */}
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger />
          <DialogContent>
            <DialogHeader>
              <h2 className="text-lg font-bold">ShadCN Dialog</h2>
            </DialogHeader>
            <div className="p-4">
              <p>This is a dialog from ShadCN UI. It's styled with Tailwind CSS.</p>
            </div>
            <DialogFooter>
              <Button onClick={() => setDialogOpen(false)} variant="secondary">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
