#include <stdio.h> // delo z datotekami in izpisovanje
#include <string.h> // delo z nizi
#include <stdlib.h> // splošne funkcije
#include "../slstatus.h"

#define RABA_FILE "/home/janezpavel/uporaba.csv"
#define MAXLINE 512 // največja dolžina ene vrstice v CSV

const char *
raba_status(const char *arg)
{
    (void)arg; // prezremo argument
	static char buf[64];
	FILE *fp; // kazalec na odprto datoteko
	char line[MAXLINE]; // prostor za vrstico iz CSV
	char *event;

	fp = fopen(RABA_FILE, "r");
	if (!fp) // če datoteka uporabe ne obstaja
		return "drugo";

	/* preberi zadnjo vrstico */
	while (fgets(line, sizeof(line), fp))
		;
	fclose(fp);

	/* format: timestamp,event[,note] */
	event = strchr(line, ','); // poišče prvo vejico v vrstici
	if (!event)
		return "drugo"; // če vrstica nima vejice / je napačne oblike, izpiše "drugo"

	event++; // preskoči vejico

	/* odreži do naslednje vejice ali newline */
	char *end = strpbrk(event, ",\n"); // poišče prvo vejico ali konec vrstice
	if (end)
		*end = '\0';

	/* preveri, ali je raba */
	if (strncmp(event, "raba-", 5) == 0) { // če se niz začne z "raba-"
		snprintf(buf, sizeof(buf), "%s", event + 5); // odstrani predpono "raba-" in preostanek shrani v buf
		return buf;
	}

	return "drugo";
}
