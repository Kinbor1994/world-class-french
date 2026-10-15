/**
 * Générateur de fichier iCalendar (.ics) pour planifier la routine quotidienne
 * de 5 minutes de révision active World-Class French.
 */

export function generateDailyIcsFile(reminderHour: number = 9): void {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const now = new Date();
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());

  const startHour = pad(reminderHour);
  const startMinute = "00";
  const endHour = pad(reminderHour);
  const endMinute = "05";

  const dtStart = `${year}${month}${day}T${startHour}${startMinute}00`;
  const dtEnd = `${year}${month}${day}T${endHour}${endMinute}00`;

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//World-Class French//PWA Routine Quotidienne//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:wcf-daily-sprint-${Date.now()}@worldclassfrench.app`,
    `DTSTAMP:${year}${month}${day}T120000Z`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    "RRULE:FREQ=DAILY",
    "SUMMARY:🧠 World-Class French · Sprint Quotidien 5 min",
    "DESCRIPTION:Session quotidienne de rappel espacé (fata.srs) et sprint de maîtrise du français. Zéro abandon, rétention garantie !",
    "LOCATION:https://worldclassfrench.app",
    "BEGIN:VALARM",
    "TRIGGER:-PT5M",
    "ACTION:DISPLAY",
    "DESCRIPTION:C'est l'heure de votre sprint World-Class French !",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "routine-world-class-french.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
