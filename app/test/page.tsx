// app/test/page.tsx
"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function TestPage() {
  const [status, setStatus] = useState<string>("Ready");
  const [value, setValue] = useState<string>("");

  const writeTest = async () => {
    try {
      setStatus("Writing...");
      const id = String(Date.now());
      await setDoc(doc(db, "test", id), { ok: true, at: new Date().toISOString() });
      setStatus("Wrote document: " + id);
    } catch (e: any) {
      setStatus("Error: " + (e?.message || String(e)));
    }
  };

  const readDocById = async () => {
    try {
      setStatus("Reading...");
      const ref = doc(db, "test", value.trim());
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setStatus("Read " + ref.id + ": " + JSON.stringify(snap.data()));
      } else {
        setStatus("No doc with ID: " + value);
      }
    } catch (e: any) {
      setStatus("Error: " + (e?.message || String(e)));
    }
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Firebase Test</h1>
      <p>Status: {status}</p>
      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <button onClick={writeTest}>Write test doc</button>
        <input
          placeholder="enter doc id to read"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ padding: 8 }}
        />
        <button onClick={readDocById}>Read doc</button>
      </div>
      <p style={{ marginTop: 16 }}>
        After deploy, visit <code>/test</code> on your site to try this page.
      </p>
    </main>
  );
}
