### TL;DR

* Recursive Proving is live on Mainnet, scaling StarkEx apps as well as StarkNet with a single proof
* Αυξάνει την κλίμακα, και παρέχει όφελος στο κόστος, και λανθάνουσα κατάσταση (ένα σπάνιο και συναρπαστικό περιστατικό κλίμακας και λανθάνουσας κατάστασης κινείται σε συνδυασμό και δεν είναι ανταλλαγή)
* Θέτει το στάδιο για L3 και άλλα οφέληΠηγαίνετε να διαβάσετε το blog post στο[Recursive Proving](https://medium.com/@starkware/recursive-starks-78f8dd401025). Είναι δροσερό πράγματα 😉

### Κλιμάκωση μέχρι!

Αναδρομικές αποδείξεις - που τροφοδοτούνται από τον γενικό υπολογισμό του Καΐρου - είναι τώρα στην παραγωγή. Αυτό σηματοδοτεί μια σημαντική ώθηση στη δύναμη της κλίμακας L2 με STARKs. Θα παραδώσει γρήγορα μια πολλαπλή αύξηση του αριθμού των συναλλαγών που μπορούν να γραφτούν στο Ethereum μέσω μιας μόνο απόδειξης.

Μέχρι τώρα, η κλίμακα STARK λειτούργησε με το να «ανεβαίνει» δεκάδες ή ακόμα και εκατοντάδες χιλιάδες συναλλαγές σε μία μόνο απόδειξη, που γράφτηκε στο Ethereum. Με αναδρομή, πολλές τέτοιες αποδείξεις μπορούν να «κυλήσουν» σε μια ενιαία απόδειξη.

Αυτή η μέθοδος είναι τώρα στην παραγωγή για μια πληθώρα εφαρμογών βασισμένες στο Κάιρο: εφαρμογές που τρέχουν σε StarkEx, SaaS κινητήρα κλιμάκωσης StarkWare του, και StarkNet, το permissionless rollup.

### Η ιστορία μέχρι στιγμής

Από την πρώτη απόδειξη στο Mainnet, τον Μάρτιο του 2020, οι ακόλουθες εξελίξεις έχουν διαμορφώσει τον τρόπο με τον οποίο χρησιμοποιούνται STARKs.

### Κλιμάκωση βάσει STARK

Τον Ιούνιο του 2020 η πρώτη λύση κλιμάκωσης βάσει STARK —[StarkEx](https://youtu.be/P-qoPVoneQA)— αναπτύχθηκε στο Ethereum Mainnet. Το StarkEx έχει ένα Prover που εκτελεί μεγάλους υπολογισμούς εκτός αλυσίδας και παράγει μια απόδειξη STARK για την ορθότητά τους, και έναν ελεγκτή που επαληθεύει αυτή την απόδειξη on-chain. Οι περιορισμοί για αυτή την πρώτη ανάπτυξη ήταν «χειρόγραφοι» από τους μηχανικούς του StarkWare, περιορίζοντας έτσι σημαντικά την ταχύτητα λειτουργίας του StarkEx. Καταλήξαμε στο συμπέρασμα ότι χρειάζεται μια γλώσσα προγραμματισμού για την υποστήριξη που αποδεικνύει τον γενικό υπολογισμό - Κάιρο.

#### Cairo

Το καλοκαίρι του 2020 το Κάιρο έκανε την[πρώτη του εμφάνιση στο Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Το Κάιρο σημαίνει CPU Algebraic Intermediate Representation (AIR), και περιλαμβάνει ένα μόνο AIR που επαληθεύει το σύνολο οδηγιών αυτού του “CPU”. Άνοιξε την πόρτα για αποδείξεις κωδικοποίησης για πιο περίπλοκη επιχειρηματική λογική, για αυθαίρετες υπολογιστικές δηλώσεις, και για να το κάνει με ταχύτερο και ασφαλέστερο τρόπο. Ένα πρόγραμμα του Καΐρου μπορεί να αποδείξει την εκτέλεση της λογικής μιας μόνο εφαρμογής. Αλλά ένα πρόγραμμα του Καΐρου μπορεί επίσης να είναι μια συνένωση πολλαπλών τέτοιων εφαρμογών - SHARP.

#### ΚΟΙΝΟΠΟΙΗΣΗ

SHARP — ένα SHARed Prover — λαμβάνει συναλλαγές από διάφορες ξεχωριστές εφαρμογές, και αποδεικνύει όλα σε ένα μόνο STARK απόδειξη. Οι εφαρμογές συνδυάζουν τις παρτίδες συναλλαγών τους, γεμίζοντας γρηγορότερα την ικανότητα ενός STARK proofs. Οι συναλλαγές διεκπεραιώνονται με βελτιωμένο ρυθμό και καθυστέρηση. Το επόμενο σύνορο: Αναδρομικά Proofs, αλλά όχι μόνο για κάποια σκληρή λογική, αλλά μάλλον για**γενικό υπολογισμό**.

Για να καταλάβετε το πλήρες όφελος της Recursive Proving αξίζει να καταλάβετε λίγο περισσότερο για το πώς (μη αναδρομικά) αποδείχθηκε από SHARP μέχρι τώρα. Το σχέδιο 1 απεικονίζει μια τυπική μη αναδρομική ροή:

![Σχέδιο 1: Ένα τυπικό μη αναδρομικό αποδεικνύει τη ροή](/assets/recursive_starks_01.png "Σχέδιο 1: Ένα τυπικό μη αναδρομικό αποδεικνύει τη ροή")

Εδώ, οι δηλώσεις φτάνουν με την πάροδο του χρόνου. Όταν επιτευχθεί ένα ορισμένο όριο δυναμικότητας (ή χρόνος), δημιουργείται μια μεγάλη συνδυασμένη δήλωση (άλλως Train). Αυτή η συνδυασμένη δήλωση αποδεικνύεται μόνο όταν ληφθούν όλες οι μεμονωμένες δηλώσεις. Αυτή η απόδειξη απαιτεί πολύ χρόνο για να αποδειχθεί (περίπου το ποσό του χρόνου που χρειάζεται για να αποδείξει κάθε δήλωση ξεχωριστά).

Η απόδειξη εξαιρετικά μεγάλων δηλώσεων περιορίζεται τελικά από τους διαθέσιμους υπολογιστικούς πόρους, όπως η μνήμη. Πριν από την αναδρομή, επρόκειτο αποτελεσματικά για τον περιορισμό του φραγμού επεκτασιμότητας της απόδειξης STARK.

### Τι είναι η αναδρομική παροχή?

Με τις αποδείξεις STARK, ο χρόνος που χρειάζεται για να αποδείξει μια δήλωση είναι σχεδόν γραμμικός με το χρόνο που χρειάζεται για να εκτελέσει τη δήλωση. Επιπλέον, αν αποδείξει μια δήλωση παίρνει χρόνο Τ, στη συνέχεια, επαληθεύοντας την απόδειξη παίρνει περίπου log(Τ) χρόνο, η οποία ονομάζεται συνήθως «λογαριθμική συμπίεση». Με άλλα λόγια, με τα STARKs ξοδεύετε πολύ λιγότερο χρόνο για την επαλήθευση της δήλωσης παρά για τον υπολογισμό της.

[Το Κάιρο](https://starkware.co/cairo/)επιτρέπει την έκφραση γενικών υπολογιστικών δηλώσεων που μπορούν να αποδειχθούν από αποδείξεις STARK και να επαληθευτούν από τους αντίστοιχους ελεγκτές STARK.

Αυτό είναι όπου η ευκαιρία να εκτελέσει[αναδρομή](https://en.wikipedia.org/wiki/Recursion)χτυπά σε: Με τον ίδιο τρόπο που γράφουμε ένα πρόγραμμα του Καΐρου που αποδεικνύει την ορθότητα χιλιάδων συναλλαγών, μπορούμε επίσης να γράψουμε ένα πρόγραμμα Κάιρο που επαληθεύει πολλαπλές αποδείξεις STARK. Μπορούμε να δημιουργήσουμε μια ενιαία απόδειξη που πιστοποιεί την εγκυρότητα των πολλαπλών «up-stream» αποδείξεων. Αυτό είναι αυτό που ονομάζουμε Recursive Proving.

Λόγω της λογαριθμικής συμπίεσης και του χονδρικά γραμμικού χρόνου, Η απόδειξη της επαλήθευσης της απόδειξης STARK απαιτεί σχετικά μικρό χρονικό διάστημα (αναμένεται να είναι μόλις λίγα λεπτά στο εγγύς μέλλον).

Κατά την εφαρμογή Recursion, SHARP μπορεί να αποδείξει δηλώσεις κατά την άφιξή τους. Οι αποδείξεις τους μπορούν να συγχωνευτούν ξανά και ξανά σε αναδρομικές αποδείξεις σε διάφορα μοτίβα μέχρι, σε ένα ορισμένο σημείο, η προκύπτουσα απόδειξη υποβάλλεται σε μια σύμβαση επαληθευτή στην αλυσίδα. Ένα τυπικό μοτίβο απεικονίζεται στο Σχέδιο 2:

![Σχέδιο 2: Ένα τυπικό αναδρομικό αποδεικνύει τη ροή.](/assets/recursive_starks_02.png "Σχέδιο 2: Ένα τυπικό αναδρομικό αποδεικνύει τη ροή.")

### Άμεσα οφέλη της αναδρομικής απόδειξης

#### Μειωμένο On-chain Κόστος

Από το ρόπαλο, επιτυγχάνουμε «συμπίεση» πολλαπλών αποδείξεων σε ένα, το οποίο συνεπάγεται χαμηλότερο κόστος επαλήθευσης επί της αλυσίδας ανά συναλλαγή (όπου κάθε δήλωση μπορεί να περιλαμβάνει πολλές συναλλαγές).

Με αναδρομή, το εμπόδιο υπολογιστικών πόρων (π.χ. μνήμη) που περιορισμένες αποδείξεις μέγεθος μέχρι τώρα, εξαλείφεται, δεδομένου ότι κάθε περιορισμένο μέγεθος δήλωση μπορεί να αποδειχθεί ξεχωριστά. Ως εκ τούτου, κατά τη χρήση αναδρομικότητας, το αποτελεσματικό μέγεθος της αμαξοστοιχίας είναι σχεδόν απεριόριστο, και το κόστος ανά συναλλαγή μπορεί να μειωθεί κατά παραγγελίες μεγέθους.

Στην πράξη, η μείωση εξαρτάται από την αποδεκτή καθυστέρηση (και από το ποσοστό με το οποίο καταλήγουν οι συναλλαγές). Επιπλέον, δεδομένου ότι κάθε απόδειξη είναι συνήθως συνοδεύεται και από κάποια έξοδο, όπως on-chain δεδομένα, υπάρχουν όρια στην ποσότητα των δεδομένων που μπορούν να γραφτούν στην αλυσίδα μαζί με μια μόνο απόδειξη. Ωστόσο, η μείωση του κόστους κατά σειρά μεγέθους και ακόμη καλύτερα είναι ασήμαντη.

#### Μειωμένη Καθυστέρηση

Το πρότυπο Recursive Proving μειώνει την καθυστέρηση της απόδειξης μεγάλων τρένων δηλώσεων. Αυτό είναι το αποτέλεσμα δύο παραγόντων:

1. Οι εισερχόμενες δηλώσεις μπορούν να αποδειχθούν**παράλληλα**(σε αντίθεση με την απόδειξη μιας εξαιρετικά μεγάλης συνδυασμένης δήλωσης).
2. Δεν υπάρχει λόγος να περιμένουμε μέχρι να ξεκινήσει η τελευταία δήλωση στο τρένο για να αρχίσουμε να αποδεικνύουμε. Αντίθετα, οι αποδείξεις μπορούν να συνδυαστούν με νέες δηλώσεις κατά την άφιξή τους. Αυτό σημαίνει ότι η καθυστέρηση της τελευταίας δήλωσης γίνεται μέλος του τρένου, είναι περίπου ο χρόνος που χρειάζεται για να αποδείξει ότι πολύ τελευταία δήλωση συν το χρόνο που χρειάζεται για να αποδείξει μια δήλωση Recursive Verifier (η οποία πιστοποιεί όλες τις δηλώσεις που έχουν ήδη «επιβιβαστεί» αυτό το συγκεκριμένο Εκπαίδευση).

Αναπτύσσουμε ενεργά και βελτιστοποιούμε την καθυστέρηση της απόδειξης της δήλωσης Recursive Verifier. Αναμένουμε ότι αυτό θα φτάσει στη σειρά των λίγων λεπτών μέσα σε λίγους μήνες. Ως εκ τούτου, ένα εξαιρετικά αποδοτικό SHARP μπορεί να προσφέρει καθυστερήσεις από λίγα λεπτά έως και λίγες ώρες, ανάλογα με το κόστος της συναλλαγής σε σχέση με την αλυσίδα ανά συναλλαγή. Αυτό αντιπροσωπεύει μια σημαντική βελτίωση στην καθυστέρηση της SHARP.

#### Διευκόλυνση L3

Η ανάπτυξη της δήλωσης Recursive Verifier στο Κάιρο παρέχει επίσης τη δυνατότητα υποβολής αποδείξεων στην StarkNet, καθώς αυτή η δήλωση μπορεί να ψηθεί σε ένα έξυπνο συμβόλαιο StarkNet. Αυτό επιτρέπει την κατασκευή[ανάπτυξης L3 πάνω από το δημόσιο StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(δίκτυο L2).

Το αναδρομικό πρότυπο ισχύει επίσης για τη συγκέντρωση αποδεικτικών από το L3, που πρέπει να επαληθευτεί με ένα μόνο αποδεικτικό στοιχείο στο L2. Ως εκ τούτου, η υπερκλιμάκωση επιτυγχάνεται και εκεί.

### Περισσότερα Λεπτά Οφέλη

#### Αιτούμενη Αναδρομή

Η επανάληψη ανοίγει ακόμα περισσότερες ευκαιρίες για πλατφόρμες και εφαρμογές που επιθυμούν να κλιμακώσουν περαιτέρω το κόστος και την απόδοσή τους.

Κάθε απόδειξη STARK βεβαιώνει την εγκυρότητα μιας δήλωσης που εφαρμόζεται σε κάποια στοιχεία που είναι γνωστά ως «δημόσια είσοδο» (ή «παραγωγή προγράμματος» σε όρους Καΐρου). Εννοιολογικά, η αναδρομή STARK συμπιέζει δύο αποδείξεις με*δύο*εισόδους σε*ένα*απόδειξη με δύο εισροές. Με άλλα λόγια, ενώ ο αριθμός των αποδείξεων μειώνεται, ο αριθμός των εισροών διατηρείται σταθερός. Αυτές οι εισροές χρησιμοποιούνται συνήθως από μια εφαρμογή για να ενημερώσετε κάποια κατάσταση στο L1 (π. χ. . για να ενημερώσετε την ρίζα του κράτους ή να εκτελέσετε μια on-chain απόσυρση).

Εάν επιτρέπεται η αναδρομική δήλωση*να γνωρίζει την εφαρμογή*, δηλαδή αναγνωρίζει τη σημασιολογία της ίδιας της αίτησης, μπορεί να συμπιέσει δύο αποδείξεις σε ένα*καθώς και*συνδυάζουν τις δύο εισόδους σε ένα. Η προκύπτουσα δήλωση βεβαιώνει την εγκυρότητα του συνδυασμού εισροών βάσει της σημασιολογίας της αίτησης, εξ ου και το όνομα Αιτητική Υποδοχή (βλ. Σχέδιο 3, για παράδειγμα)..

![Σχέδιο 3: Παράδειγμα εφαρμογής επανάληψης](/assets/recursive_starks_03.png "Σχέδιο 3: Παράδειγμα εφαρμογής επανάληψης")

Εδώ, Δήλωση 1 βεβαιώνει μια ενημέρωση του κράτους από το Α έως το Β και Δήλωση 2 βεβαιώνει σε μια περαιτέρω ενημέρωση από το Β στο C. Τα αποδεικτικά της δήλωσης 1 και της δήλωσης 2 μπορούν να συνδυαστούν σε τρίτη δήλωση, που πιστοποιεί την άμεση επικαιροποίηση από το Α έως το Γ. Με την εφαρμογή παρόμοιας λογικής αναδρομικά, μπορεί κανείς να μειώσει το κόστος των κρατικών ενημερώσεων πολύ σημαντικά μέχρι την απαίτηση καθυστέρησης του τελικού.

Ένα άλλο σημαντικό παράδειγμα της Applicative Recursion είναι η συμπίεση δεδομένων rollup από πολλαπλές αποδείξεις. Για παράδειγμα, για μια συνάθροιση ισχύος όπως StarkNet, κάθε ενημέρωση αποθήκευσης για το L2 περιλαμβάνεται επίσης ως δεδομένα διαβίβασης για το L1, ώστε να εξασφαλίζεται η διαθεσιμότητα των δεδομένων. Ωστόσο, δεν υπάρχει ανάγκη αποστολής πολλαπλών ενημερώσεων για το ίδιο στοιχείο αποθήκευσης, ως μόνο η τελική αξία των συναλλαγών που πιστοποιούνται από το επαληθευμένο αποδεικτικό απαιτείται για τη διαθεσιμότητα των δεδομένων. Αυτή η βελτιστοποίηση εκτελείται ήδη μέσα σε ένα*ενιαίο*μπλοκ StarkNet. Ωστόσο, δημιουργώντας ένα αποδεικτικό ανά μπλοκ, η Αιτούσα Υποδοχή μπορεί να συμπιέσει αυτά τα δεδομένα σε*πολλαπλάσια*μπλοκ L2. Αυτό μπορεί να οδηγήσει σε σημαντική μείωση του κόστους, επιτρέποντας μικρότερα διαστήματα φραγμών στο L2, χωρίς να θυσιάζει τη δυνατότητα κλιμάκωσης των ενημερώσεων L1.

Αξίζει να σημειώσετε: Αιτητική επανάληψη μπορεί να συνδυαστεί με την εφαρμογή-αγνωστική αναδρομή, όπως απεικονίζεται νωρίτερα. Αυτές οι δύο βελτιστοποιήσεις είναι ανεξάρτητες.

#### Μειωμένη On-chain Πολυπλοκότητα Επαληθευτή

Η πολυπλοκότητα του ελεγκτή STARK εξαρτάται από το είδος των δηλώσεων που έχει σχεδιαστεί για να επαληθεύσει. Ειδικότερα, για τις δηλώσεις του Καΐρου, η πολυπλοκότητα του ελεγκτή εξαρτάται από τα συγκεκριμένα στοιχεία που επιτρέπονται στη γλώσσα του Καΐρου, και, πιο συγκεκριμένα, οι υποστηριζόμενες ενσωματώσεις (αν χρησιμοποιούμε τη μεταφορά της CPU για το Κάιρο, τότε οι ενσωματωμένες ίνες είναι το ισοδύναμο των μικρο-κυκλωμάτων σε μια CPU: υπολογισμοί που εκτελούνται τόσο συχνά ώστε απαιτούν τη δική τους βελτιστοποιημένη υπολογισμού).

Η γλώσσα του Καΐρου συνεχίζει να εξελίσσεται και να προσφέρει όλο και πιο χρήσιμες ενσωματώσεις. Από την άλλη πλευρά, ο Αναδρομικός Επαληθευτής απαιτεί μόνο τη χρήση ενός μικρού υποσυνόλου αυτών των ενσωματωμένων. Ως εκ τούτου, μια αναδρομική SHARP μπορεί να υποστηρίξει με επιτυχία οποιαδήποτε δήλωση στο Κάιρο, υποστηρίζοντας την πλήρη γλώσσα στους αναδρομικούς επαληθευτές. Συγκεκριμένα, ο ελεγκτής αλληλεγγύης L1 χρειάζεται μόνο να επαληθεύει αναδρομικές αποδείξεις, και έτσι μπορεί να περιοριστεί σε ένα πιο σταθερό υποσύνολο της γλώσσας του Καΐρου: Ο ελεγκτής L1 δεν χρειάζεται να συμβαδίσει με τις τελευταίες και μεγαλύτερες ενσωματώσεις. Με άλλα λόγια, η επαλήθευση των συνεχώς εξελισσόμενων σύνθετων δηλώσεων υποβιβάζεται στο L2, αφήνοντας τον ελεγκτή L1 για να επαληθεύσει απλούστερες και πιο σταθερές δηλώσεις.

#### Μειωμένος Υπολογισμός Αποτύπωσης

Πριν την αναδρομή, η ικανότητα συγκέντρωσης πολλαπλών δηλώσεων σε μία απόδειξη περιορίστηκε από το μέγιστο μέγεθος της δήλωσης που θα μπορούσε να αποδειχθεί σε διαθέσιμα υπολογιστικά περιστατικά (και το χρόνο που θα μπορούσε να λάβει για τη δημιουργία τέτοιων αποδείξεων).

Με την επανάληψη δεν υπάρχει πλέον ανάγκη να αποδειχθούν τόσο μεγάλες δηλώσεις. Ως αποτέλεσμα, μικρότερη, μπορούν να χρησιμοποιηθούν λιγότερο ακριβά και πιο διαθέσιμα υπολογιστικά στιγμιότυπα (αν και περισσότερα από αυτά μπορεί να χρειαστούν από ό, τι με μεγάλες μονολιθικές παροιμίες). Αυτό επιτρέπει την ανάπτυξη των εμφανίσεων prover σε περισσότερα φυσικά και εικονικά περιβάλλοντα από ό, τι ήταν δυνατό.

### Summary

Οι αναδρομικές αποδείξεις γενικού υπολογισμού εξυπηρετούν πλέον πολλαπλά συστήματα παραγωγής, συμπεριλαμβανομένου του StarkNet, στο Mainnet Ethereum.

Τα οφέλη της αναδρομής θα πραγματοποιηθούν σταδιακά, καθώς συνεχίζει να επιτρέπει νέες βελτιώσεις, and it will soon deliver hyper-scale, cut gas fees, and improve latency by unlocking the potential of parallelizationπαραλληλισμό .

Θα αποφέρει σημαντικά οφέλη κόστους και καθυστέρησης μαζί με αυτό, μαζί με νέες ευκαιρίες όπως L3 και εφαρμογή-επανάληψη. Περαιτέρω βελτιστοποίηση του Recursive Verifier είναι σε εξέλιξη και ακόμα καλύτερη απόδοση και οφέλη από το κόστος αναμένεται να παρέχονται με την πάροδο του χρόνου.



**Gidi Kaempfer**, Επικεφαλής της Core Engineering, StarkWare