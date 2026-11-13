const events = [
  { title: "Robotics night", category: "technology", capacity: 80, registered: 62, featured: true },
  { title: "Campus orchestra", category: "arts", capacity: 120, registered: 120, featured: false },
  { title: "Sustainable gardens", category: "community", capacity: 40, registered: 18, featured: true },
];

// TODO 1: write seatsRemaining(event).// boş koltuk sayısını hesaplar
function seatsReaaamaining(event){
  return event.capacity - event.registered;
}

// TODO 2: write eventStatus(event).//doluluk durumunu gösterir
function eventStatus(event){
  conts remaining = seatsRemaining(event);
  if(remaining === 0) return "Full";
  if(remaining <= 10) return "Almost full";
  return "Available";
}
  
// TODO 3: write filterEvents(allEvents, category) (etkinlikleri seçilen katagoriye göre filtreler
fuction filterEvents(allEvents, category) {
  //kategori boşsa all seçildiyse tüm listeyi getirir
  if (!category | | category === "all"){
    return allEvents;
  }
  //sadece istenen kategoriye ait etkinlikleri yeni bir liste olarak döndürür
  return allEvents.filter((event) => event.category === category);
}
// TODO 4: write summarizeEvents(allEvents).(Tüm etkinliklerin genel istatistik özetini tek bir nesnede toplar)
function summarizeEvents(allEvents){
  // .map() ile  her etkinliği dolaşıp sadece istenen 3 bilgiyi yeni bir nesneye aktarır
  return allEvents.map((event) => ({
    title: event.category,
    remaining: seatsRemaininbg(event)
    status: eventStatus(event),
    }));
}
//Etkinlik li,stesini konsolda tablo haline getirir                                                                                                                                      
console.table(events);
