// app/dashboard/page.tsx

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Search, LayoutDashboard, ListChecks, FolderKanban, Upload, Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="d-flex min-vh-100 bg-dark text-light">
      {/* Sidebar */}
      <aside className="d-flex flex-column flex-shrink-0 p-3 bg-black" style={{ width: "260px" }}>
        <h3 className="text-white mb-4">MarkIt</h3>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link text-light active d-flex align-items-center gap-2">
              <LayoutDashboard size={18}/> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-light d-flex align-items-center gap-2">
              <ListChecks size={18}/> My Tasks
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-light d-flex align-items-center gap-2">
              <FolderKanban size={18}/> Project Overview
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-light d-flex align-items-center gap-2">
              <Upload size={18}/> Submissions
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-light d-flex align-items-center gap-2">
              <Calendar size={18}/> Event Calendar
            </a>
          </li>
        </ul>
        <div className="mt-auto">
          <Button variant="outline" className="w-100">Select Project</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4">
        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Hi, Welcome back 👋</h4>
          <div className="d-flex align-items-center gap-3">
            <Input type="search" placeholder="Search..." className="form-control bg-dark text-light"/>
            <Bell className="text-light" />
            <Button variant="outline" size="sm">Theme</Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row g-3 mb-4">
          {[
            { title: "Pending Tasks", value: 0, desc: "Number of pending tasks" },
            { title: "Review Tasks", value: 0, desc: "Number of review tasks" },
            { title: "Completed Tasks", value: 0, desc: "Number of completed tasks" },
            { title: "Rejected Tasks", value: 0, desc: "Number of rejected tasks" },
          ].map((item, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <Card className="bg-black text-light h-100 rounded-3">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h2>{item.value}</h2>
                  <p className="text-muted small">{item.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Activity + Members */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-lg-8">
            <Card className="bg-black text-light h-100 rounded-3">
              <CardHeader>
                <CardTitle>Activity Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">No activity records found for this project</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 col-lg-4">
            <Card className="bg-black text-light h-100 rounded-3">
              <CardHeader>
                <CardTitle>Project Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">No member stats available.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center mt-5">
          <h5>No project selected</h5>
          <p className="text-muted">
            You have not selected or created a project yet.  
            To get started, please create a project from the sidebar.
          </p>
        </div>
      </main>
    </div>
  );
}
