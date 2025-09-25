#include <iostream>
#include <string>
using namespace std;

class Venue {
protected:
    string venue_name;
public:
    Venue() : venue_name("Default Venue") {}
    Venue(string v) : venue_name(v) {}
    void setVenue(string v) { venue_name = v; }
    void displayVenue() const { cout << "Venue: " << venue_name << endl; }
};

class Schedule {
protected:
    string date;
public:
    Schedule() : date("TBD") {}
    Schedule(string d) : date(d) {}
    void setDate(string d) { date = d; }
    void displaySchedule() const { cout << "Scheduled Date: " << date << endl; }
};

class Event : public Venue, public Schedule {
private:
    string event_name;
    string organizer;
    string event_type;
    double budget;

    static int eventCount;

public:
    Event() : Venue(), Schedule(), event_name("Untitled"), organizer("Unknown"), event_type("General"), budget(0.0) {
        eventCount++;
        cout << "Default Event constructor called.\n";
    }

    Event(string name, string org, string type, double bud, string v, string d)
        : Venue(v), Schedule(d), event_name(name), organizer(org), event_type(type), budget(bud) {
        eventCount++;
        cout << "Parameterized Event constructor called.\n";
    }

    void displayEventDetails() const {
        cout << "\nEvent Name: " << event_name << endl;
        cout << "Organizer: " << organizer << endl;
        cout << "Event Type: " << event_type << endl;
        cout << "Remaining Budget: ₹" << budget << endl;
        displayVenue();
        displaySchedule();
    }

    double getBudget() const { return budget; }

    static int getEventCount() { return eventCount; }

protected:

    string getEventName() const { return event_name; }
    string getOrganizer() const { return organizer; }
    string getEventType() const { return event_type; }
};

int Event::eventCount = 0;


class MegaEvent : public Event {
private:
    int noOfSubEvents;
public:
    MegaEvent() : Event(), noOfSubEvents(0) {
        cout << "Default MegaEvent constructor called.\n";
    }

    MegaEvent(string name, string org, string type, double bud, string v, string d, int subEvents)
        : Event(name, org, type, bud, v, d), noOfSubEvents(subEvents) {
        cout << "Parameterized MegaEvent constructor called.\n";
    }

    void displayMegaEventDetails() {
        cout << "\nMega Event Details ";
        displayEventDetails(); 
        cout << "Number of Sub Events: " << noOfSubEvents << endl;
    }
};


int main() {
    cout << "Creating a normal Event:\n";
    Event e1("Music Fest", "ABC Org", "Cultural", 50000, "Grand Hall", "2024-12-25");
    e1.displayEventDetails();

    cout << "\nCreating a MegaEvent (Multilevel Inheritance):\n";
    MegaEvent me("Tech Carnival", "XYZ Org", "Technical", 150000, "Convention Center", "2025-02-10", 5);
    me.displayMegaEventDetails();

    cout << "\nTotal Events Created: " << Event::getEventCount() << endl;

    return 0;
}
