/* user and group to drop privileges to */
static const char *user  = "uporabnik";
static const char *group = "uporabnik";

static const char *colorname[NUMCOLS] = {
	[INIT] =   "black",     /* after initialization */
	[INPUT] =  "#003347",   /* during input */
	[FAILED] = "#660000",   /* wrong password */
};

/* treat a cleared input like a wrong password (color) */
static const int failonclear = 1;

/* default message */
static const char * message = "To je moje sporočilo svetu pred zaklenjenim zaslonom.";

/* text color */
static const char * text_color = "#ffffff";

/* text size (must be a valid size) */
static const char * font_name = "9x15";
